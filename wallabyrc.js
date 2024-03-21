module.exports = function () {
  return {
    // ... other configurations here
    files: ['src/**/*.ts'],
    tests: ['src/**/*.spec.{js,ts}'],
    trace: true,
    browser: 'firefox', // i want to use firefox
  };
};
