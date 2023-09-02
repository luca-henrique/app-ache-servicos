//  release-stage-ios:
//     macos:
//       xcode: 13.4.0 # Specify the Xcode version to use
//     steps:
//       - checkout
//       - add_ssh_keys:
//           fingerprints:
//             - '36:25:15:d8:6e:6f:c8:6e:42:8f:e0:cc:6d:e7:65:e8'
//             - '12:93:5d:2b:c0:97:76:20:cc:69:da:8a:27:5c:61:ce'
//       - run:
//           name: 'bundle update'
//           command: cd ios && bundle update --bundler
//       - run:
//           name: 'Running bundle install'
//           command: cd ios && bundle install
//       - run:
//           name: 'Matching certificates'
//           command: cd ios && bundle exec fastlane cert
//       - run:
//           name: 'Installing npm dependencies'
//           command: npm install
//       - run:
//           name: 'Installing pods dependencies'
//           command: cd ios && pod install
//       - run:
//           name: 'Decoding apple key from base64 to Ios Folder'
//           command: echo $APPLE_KEY | base64 --decode > ./ios/AuthKey_66234AW2S2.p8
//       - run:
//           name: 'Deploying to testflight'
//           command: cd ios && bundle exec fastlane beta

//  - release-stage-ios:
//           filters:
//             branches:
//               ignore: /.*/
//             tags:
//               only: /^stage-ios-[0-9]+(\.[0-9]+)*$/
