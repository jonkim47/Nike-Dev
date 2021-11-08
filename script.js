function send(method) {
  switch (method) {
    case "page":
      analytics.page("Nike Golf Shoes - Landing");
      break;
    case "track":
      analytics.track('Product Selected', {
        product_name: 'Nike Air Zoom Infinity Tour Shield',
        category: 'Golf',
        product_type: 'Shoes',
        colorway: 'Rattan/Birch/Particle Grey/Black',
        price: '180' 
      });
      break;
    case "track2":
      analytics.track('Product Selected', {
        product_name: 'Jordan ADG 3',
        category: 'Golf',
        product_type: 'Shoes',
        colorway: 'White/Cement',
        price: '140' 
      });
      break;
    case "identify":
      analytics.identify('91d2811a848c01ac', {
        name: 'Jonathan Kim',
        email: 'dsdemo47@gmail.com'
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
