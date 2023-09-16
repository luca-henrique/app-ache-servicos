const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:8082',
    token: 'sqp_2fcb598cf45f8802802316a536bff4626bc8f3af',
    options: {
      'sonar.projectName': 'sonarqube-react-project',
      'sonar.projectDescription': 'Here I can add a description of my project',
      'sonar.projectKey': 'sonarqube-react-project',
      'sonar.projectVersion': '0.0.1',
      'sonar.exclusions':
        '.github/**, .vscode/**, android/**, assets/**, build/**, ios/**, node_modules/**, scripts/**',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit(),
);
