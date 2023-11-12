import requests

url = 'https://www.instagram.com/reel/CnKJYvbBevc/?utm_source=ig_web_copy_link' # replace with the actual URL of the video
response = requests.get(url, stream=True)

with open('instagram_video.mp4', 'wb') as f:
    for chunk in response.iter_content(1024):
        f.write(chunk)
