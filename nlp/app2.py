# from flask import Flask, request

# app = Flask(__name__)

import wave

from vosk import Model, KaldiRecognizer, SetLogLevel

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
        print(" ".join(results))
    else:
        print("Audio file must be WAV format mono PCM.")

def transcribe(wav_file):
    try:
        wf = wave.open(wav_file, "rb")
        getTranscription(wf=wf)
    except FileNotFoundError:
        print("File does not exist")
    except:
        print("Unknown Error")

def vosk_transcribe():
    while True:
        wav_file = input("Wave file: ")
        if wav_file.lower() == "q":
            break
        transcribe(wav_file=wav_file)
        print("")


# @app.route("/members")
# def members():
#     return {"members": ["m1", "m2", "m3"]}
if __name__ == "__main__":
    # app.run(debug=True)
    vosk_transcribe()