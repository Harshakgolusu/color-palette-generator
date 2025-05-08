# Color Palette Generator

A simple web application that generates a grid of random colors and allows users to copy hex color codes by clicking on them.

## Features

- Generates a grid of random colors
- Displays hex color codes on each color box
- Click to copy hex color code to clipboard
- Responsive design
- Deployed using Kubernetes

## Local Development

1. Clone the repository
2. Open `index.html` in your web browser

## Docker Build

To build the Docker image:

```bash
docker build -t color-palette:latest .
```

## Kubernetes Deployment

1. Build the Docker image
2. Apply the Kubernetes configurations:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

3. Get the service URL:

```bash
kubectl get service color-palette-service
```

## Requirements

- Docker
- Kubernetes cluster
- Web browser with JavaScript enabled 