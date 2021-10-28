function send(method) {
  switch (method) {
    case "page":
      analytics.page("Sample Page Event");
      break;
    case "track":
      analytics.track("Sample Track Event", {
        sampleProperty: true
      });
      break;
    case "identify":
      analytics.identify('123456', {
        name: 'Jonathan Kim',
        email: 'jonkim47@gmail.com'
      });
      break;
    case "group":
      analytics.group("sampleGroupId", {
        sampleGroupTrait: true
      });
      break;
    default:
      alert("Method not supported")
  }
}
