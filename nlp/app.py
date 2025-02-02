from vosk import Model, KaldiRecognizer, SetLogLevel
import wave
import subprocess
from pydub import AudioSegment
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
# You can set log level to -1 to disable debug messages
SetLogLevel(0)
model = Model(model_path="./vosk-model-en-us-0.22")

def getResultFromString(recResult: str):
    return recResult.split("\n")[-2].strip().split(":")[-1].strip().replace('"', '')

def getTranscription(wf):
    if not (wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getcomptype() != "NONE"):
        rec = KaldiRecognizer(model, wf.getframerate())
        rec.SetWords(True)
        rec.SetPartialWords(True)
        results = []
        while True:
            data = wf.readframes(4000)
            if len(data) == 0:
                break
            if rec.AcceptWaveform(data):
                results.append(getResultFromString(rec.Result()))
        return " ".join(results) if len(results) > 0 else getResultFromString(rec.FinalResult())
    else:
        print("Audio file must be WAV format mono PCM.")

def transcribe(wav_file):
    try:
        wf = wave.open(wav_file, "rb")
        return getTranscription(wf=wf)
    except FileNotFoundError:
        print("File does not exist")
    except:
        print("Unknown Error")

@app.route("/transcribe", methods=["POST"])
@cross_origin()
def postTranscribe():
    request.files['data'].save("tmp.wav")
    subprocess.call(["ffmpeg", "-i", "tmp.wav", "-acodec", "pcm_s16le", "-ac", "1", "-ar", "16000", "out.wav"])
    transcription = transcribe('out.wav')
    print(transcription)
    subprocess.call(['rm', 'out.wav'])
    return transcription if transcription is not None else ""

if __name__ == "__main__":
    app.run(debug=True)
