const storeItems = [
    {
      id: 1,
      category: 'sp',
      name: 'Orient Nam - 41mm - Kính Sapphire',
      price: '20.99',
      favorite: true,
      
    images:
    {
      imageMain: require('../assets/orient1.jpeg'),
      black: require('../assets/orient1.jpeg'),
      sienna: require('../assets/orient2.jpeg'),
    },
      productNumber:'CT78102927',
      stock: 10,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['100','200','150'],
      stretchedLength: ['24','28','32','34','36'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
  },
   {
      id: 2,
      category: 'sp',
      name: 'Ogival Nam - 40mm - Kính Sapphire',
      price: '23.99',
      favorite: false,
     images: {
       imageMain: require('../assets/ogival1.jpeg'),
       black: require('../assets/ogival1.jpeg'),
       darkslategray: require('../assets/orient5.jpeg')
     },
      productNumber:'DS2891800',
      stock: 10,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['150','90'],
      stretchedLength: ['14','16','20'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
    {
      id: 3,
      category: 'sp',
      name: 'SRWATCH Nam - 41mm - Kính Sapphire',
      price: '23.99',
      favorite: false,
      images: {
        imageMain: require('../assets/srwatch1.jpeg'),
        wheat: require('../assets/srwatch1.jpeg'),
        lightsalmon: require('../assets/srwatch1.jpeg'),
      },
      productNumber:'GY728920',
      stock: 80,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['OS'],
      stretchedLength: ['OS'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
  },
    {
      id: 4,
      category: 'sp',
      name: 'Bulova Nam - 44mm - Kính cứng Sapphire',
      price: '23.99',
      favorite: false,
      images: {
        imageMain: require('../assets/bulova1.jpeg'),
        darkgray: require('../assets/bulova1.jpeg'),
        black: require('../assets/bulova1.jpeg'),
      },
      productNumber:'6209827378',
      stock: 120,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
  
    {
      id: 5,
      category: 'sp',
      name: 'Orient Nam - 40.5mm - Kính cứng',
      price: '12.99',
      favorite: false,
      images: {
        imageMain: require('../assets/orient2.jpeg'),
        black: require('../assets/orient2.jpeg'),
        wheat:require('../assets/orient3.jpeg'),
      },
      productNumber:'XP8727891',
      stock: 40,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
    {
      id: 6,
      category: 'sp',
      name: 'Citizen Nam - 42.2mm - Kính Saphire',
      price: '50.99',
      favorite: true,
      images: {
        imageMain: require('../assets/citizen1.jpeg'),
        black: require('../assets/citizen1.jpeg'),
        darkgreen: require('../assets/citizen1.jpeg')
        
      },
      productNumber:'QP1927993',
      stock: 10,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
    {
      id: 7,
      category: 'sp',
      name: 'Orient Nam - 40.8mm - Kính Sapphire',
      price: '15.99',
      favorite: true,
      images: {
        imageMain: require('../assets/orient3.jpeg'),
        blue: require('../assets/orient3.jpeg'),
        pink: require('../assets/orient4.jpeg'),

      },
      productNumber:'WV7097537',
      stock: 20,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['OS'],
      stretchedLength: ['OS'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
    {
      id: 8,
      category: 'sp',
      name: 'Seiko Nam - 40.8mm - Kính cứng',
      price: '15.99',
      favorite: false,
      images: {
        imageMain: require('../assets/seiko1.jpeg'),
        black: require('../assets/seiko1.jpeg'),
        saddlebrown: require('../assets/seiko1.jpeg')
      },
    productNumber:'AS2828883',
    stock: 19,
    partSize: ['24/0.9','28/1.1','32/1.3'],
    density: ['150','90','300'],
    stretchedLength: ['14','16','18','20','22'],
    description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
    {
      id: 9,
      category: 'sp',
      name: 'Orient Nam - 42.5mm - Kính Sapphire',
      price: '29.99',
      favorite: false,
      images: {
        imageMain: require('../assets/orient4.jpeg'),
        black: require('../assets/orient4.jpeg'),
        sienna: require('../assets/orient5.jpeg')
      },
      productNumber:'GS1990112',
      stock: 32,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
  },
    {
      id: 10,
      category: 'sp',
      name: 'Orient Nam - 41.7mm - Kính Cứng',
      price: '29.99',
      favorite: true,
      images: {
        imageMain: require('../assets/orient5.jpeg'),
        black: require('../assets/orient5.jpeg'),
        darkred: require('../assets/orient3.jpeg')
      },
      productNumber:'AC100199',
      stock: 50,
      partSize: ['24/0.9','28/1.1','32/1.3'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Mẫu mã nằm trong bộ sưu tập Grands Boulevards mang sự phá cách và hiện đại trong mỗi sản phẩm. Kiểu mặt của mẫu đồng hồ này có hình lục giác độc đáo mới lạ kết hợp với màu đỏ đô quyền lực và quyến rũ.Khung viền được làm từ chất liệu thép không gỉ 316L sáng bóng và cứng cáp, hơn nữa bên trên còn được đính đá xung quanh giúp gia tăng sự sang trọng của mẫu thiết kế này.",
    },
];
  
export const bag = [];

export const users = [];

  
  export default storeItems;