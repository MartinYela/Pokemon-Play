## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result

## Deploy on server

```bash
npm run build
docker build -t pokemon-play-app .
docker run -it -p 80:80 --name pokemon-play-app pokemon-play-app
```

change localhost to server url in the file "default.conf".

Open [{url}]({url}) with your browser to see the result
