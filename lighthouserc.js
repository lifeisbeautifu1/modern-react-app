export default {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "unused-javascript": "warn",
      },
    },
  },
};
