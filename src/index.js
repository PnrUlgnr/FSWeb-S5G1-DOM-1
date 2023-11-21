const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navItems = document.querySelectorAll("nav a"); //[..]
/*navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];
navItems[0].setAttribute("class", "italic")
navItems[1].setAttribute("class", "italic")
navItems[2].setAttribute("class", "italic")
navItems[3].setAttribute("class", "italic")
navItems[4].setAttribute("class", "italic")
navItems[5].setAttribute("class", "italic")
*/
navItems.forEach((item, index) => {
  let sira = index + 1;
  item.textContent = siteContent.nav["nav-item-" + sira];
  item.setAttribute("class", "italic");
});
const logo = document.querySelector("#logo-img");
//logo.setAttribute("src", siteContent.images["logo-img"]);
logo.src = siteContent.images["logo-img"];
//section CTA
const ctaTextH1 = document.querySelector(".cta-text h1");
ctaTextH1.textContent = siteContent["cta"]["h1"];
const ctaTextButton = document.querySelector(".cta-text button");
ctaTextButton.textContent = siteContent["cta"]["button"];
//img
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["images"]["cta-img"]);

//mddle img
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"];
//section .main-content

const topContH = document.querySelectorAll(".top-content h4");
topContH[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContH[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const topContP = document.querySelectorAll(".top-content p");
topContP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topContP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContH = document.querySelectorAll(".bottom-content h4");
bottomContH[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContH[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContH[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomContP = document.querySelectorAll(".bottom-content p");
bottomContP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

// section -contact
const iletisimH = document.querySelector(".contact h4");
iletisimH.textContent = siteContent["iletisim"]["iletişim-h4"];

const iletisimP = document.querySelectorAll(".contact p");
iletisimP[0].textContent = siteContent["iletisim"]["adres"];
iletisimP[1].textContent = siteContent["iletisim"]["telefon"];
iletisimP[2].textContent = siteContent["iletisim"]["email"];

//img
//const ctaImg = document.getElementById("cta-img");
//ctaImg.setAttribute("src", siteContent["images"]["cta-img"]);

//ctaImg.src =siteContent["images"]["cta-img"];

//const middleImg = document.querySelector("#middle-img");
//middleImg.src = siteContent["images"]["accent-img"];

//section footer
const footerA = document.querySelector("footer a");
footerA.textContent = siteContent.footer.copyright;
footerA.setAttribute("class", "bold");
