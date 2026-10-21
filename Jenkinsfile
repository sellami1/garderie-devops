pipeline {
  agent any

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    FRONTEND_IMAGE = 'your-dockerhub-user/garderie-frontend'
    BACKEND_IMAGE = 'your-dockerhub-user/garderie-backend'
    IMAGE_TAG = "${env.GIT_COMMIT.take(7)}"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/your-user/garderie-devops.git'
      }
    }

    stage('Install') {
      steps {
        sh 'cd backend && npm install --no-audit --no-fund'
        sh 'cd frontend && npm install --no-audit --no-fund'
      }
    }

    stage('Test') {
      steps {
        sh 'cd frontend && npm test -- --watch=false'
      }
    }

    stage('Build Frontend') {
      steps {
        sh "docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} -f frontend/Dockerfile frontend"
        sh "docker tag ${FRONTEND_IMAGE}:${IMAGE_TAG} ${FRONTEND_IMAGE}:latest"
      }
    }

    stage('Build Backend') {
      steps {
        sh "docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} -f backend/Dockerfile backend"
        sh "docker tag ${BACKEND_IMAGE}:${IMAGE_TAG} ${BACKEND_IMAGE}:latest"
      }
    }

    stage('Push Frontend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
          sh "docker push ${FRONTEND_IMAGE}:${IMAGE_TAG}"
          sh "docker push ${FRONTEND_IMAGE}:latest"
        }
      }
    }

    stage('Push Backend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
          sh "docker push ${BACKEND_IMAGE}:${IMAGE_TAG}"
          sh "docker push ${BACKEND_IMAGE}:latest"
        }
      }
    }
  }

  post {
    failure {
      echo 'Le pipeline a échoué. L’exécution a été arrêtée après l’échec du test.'
    }
    success {
      echo 'Pipeline Jenkins réussi.'
    }
  }
}
