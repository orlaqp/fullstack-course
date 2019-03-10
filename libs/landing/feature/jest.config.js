module.exports = {
  name: 'landing-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/landing/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
