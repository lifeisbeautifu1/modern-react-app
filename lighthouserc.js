export default {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "unused-javascript": "off",
        "render-blocking-resources": "off",
      },
    },
  },
};
