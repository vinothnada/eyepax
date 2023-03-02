exports.getCarousal = async (val) => {
  return  photoList.filter((item => item.id<= val ));
};



const photoList = [
  {
      "id":1,
      "title": "Photo 1",
      "subTitle": "Photo 1 Subtitle 1",
      "image": "1.jpg"
  },
  {
      "id":2,
      "title": "Photo 2",
      "subTitle": "Photo 2 Subtitle 2",
      "image": "2.jpg"
  },
  {
      "id":3,
      "title": "Photo 3",
      "subTitle": "Photo 3 Subtitle 3",
      "image": "3.jpg"
  },
  {
      "id":4,
      "title": "Photo 4",
      "subTitle": "Photo 4 Subtitle 4",
      "image": "4.jpg"
  },
  {
      "id":5,
      "title": "Photo 5",
      "subTitle": "Photo 5 Subtitle 5",
      "image": "5.jpg"
  },
  {
      "id":6,
      "title": "Photo 6",
      "subTitle": "Photo 6 Subtitle 6",
      "image": "6.jpg"
  },
  {
      "id":7,
      "title": "Photo 7",
      "subTitle": "Photo 7 Subtitle 7",
      "image": "7.jpg"
  },
  {
      "id":8,
      "title": "Photo 8",
      "subTitle": "Photo 8 Subtitle 8",
      "image": "8.jpg"
  },
  {
      "id":9,
      "title": "Photo 9",
      "subTitle": "Photo 9 Subtitle 9",
      "image": "9.jpg"
  },
  {
      "id":10,
      "title": "Photo 10",
      "subTitle": "Photo 10 Subtitle 10",
      "image": "10.jpg"
  },
]