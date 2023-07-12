import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    distinct: uuidv4(),
    photo: require("../Asset/Imgs/img2.png"),
    text: "Despair",
    price: 5500,
    id: 1,
    desc: "Limited edition of 50, signed and numbered by Author Name. Printed Press Name Etching 310 gsm.  This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    desc1:
      "This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    year: "2022",
    height: "20",
    width: "25",
  },

  {
    distinct: uuidv4(),
    photo: require("../Asset/Imgs/img4.png"),
    text: "Perspective",
    price: 5900,
    id: 2,
    desc: "Limited edition of 50, signed and numbered by Author Name. Printed Press Name Etching 310 gsm.  This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    desc1:
      "This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    year: "2021",
    height: "32",
    width: "48",
  },
  {
    distinct: uuidv4(),
    photo: require("../Asset/Imgs/img5.png"),
    text: "Color",
    price: 9600,
    id: 3,
    desc: "Limited edition of 50, signed and numbered by Author Name. Printed Press Name Etching 310 gsm.  This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    desc1:
      "This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    year: "2020",
    height: "30",
    width: "42",
  },

  {
    distinct: uuidv4(),
    photo: require("../Asset/Imgs/img1.png"),
    text: "Dark",
    price: 5000,
    id: 4,
    desc: "Limited edition of 50, signed and numbered by Author Name. Printed Press Name Etching 310 gsm.",
    desc1:
      "This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    year: "2022",
    height: "40",
    width: "30",
  },
  {
    distinct: uuidv4(),
    photo: require("../Asset/Imgs/img3.png"),
    text: "Harm",
    price: 7000,
    id: 5,
    desc: "Limited edition of 50, signed and numbered by Author Name. Printed Press Name Etching 310 gsm. This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    desc1:
      "This print is A1, 594 x 841 mm (23.4 x 33.1 in). This includes a 34.8 mm (1.37 in) border on the top and sides and a 45.7 mm (1.80 in) border at the bottom to fit the signature and allow for framing.",
    year: "2021",
    height: "58",
    width: "42",
  },
];

export default projects;
