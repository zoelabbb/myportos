---
layout: "@/templates/BasePost.astro"
title: JavaScript Regular Functions vs Arrow Functions
description: Pada artikel ini, kita akan sama-sama mempelajari bagaimana cara menggunakan Regular Function dan Arrow Function.
pubDate: 2024-02-04T00:00:00Z
imgSrc: "/assets/images/arrow_bg.png"
imgAlt: "JS Arrow Function"
---

# Apa perbedaan Regular Function dan Arrow Function?

Dalam JavaScript, ada berbagai cara dalam penulisan fungsi. Yaitu, kamu dapat membuat fungsi menggunakan sintaks **Arrow Function** dan juga **Regular Function**.

Pada artikel ini, kita akan sama-sama mempelajari bagaimana cara menggunakan kedua metode tersebut. Dan disini kamu juga akan belajar tentang perbedaan antara kedua fungsi tersebut dan kapan saat yang tepat untuk menggunakannya.

<!-- Membuat daftar isi markdown -->

## Yang akan kita pelajari

- [Perbedaan Regular Function dan Arrow Function](#perbedaan-regular-function-dan-arrow-function)
  - [Regular Function](#regular-function)
  - [Arrow Function](#arrow-function)
- [Mencoba compile menggunakan Dev Tools](#mencoba-compile-menggunakan-Dev-Tools)
  - Google Chrome
  - Mozilla Firefox
- [Jadi Mana Yang Harus Kamu Gunakan ?](#jadi-mana-yang-harus-kamu-gunakan)

Ada perbedaan sintaks dan perilaku yang penting antara kedua metode ini.
Mari kita bahas perbedaan fungsi panah dan fungsi biasa agar Anda lebih memahami kapan sebaiknya menggunakan masing-masing fungsi.

<!-- Link ke daftar isi markdown -->

## Perbedaan Regular Function dan Arrow Function

Untuk memahami perbedaan antara kedua function diatas, mari kita awali dengan melihat contoh penulisan sintaksnya terlebih dahulu. Agar kalian tidak kebingungan dalam memahami dan mempelajari kedua fungsi ini.

### Regular Function

Cara umum menggunakan Regular Function di JavaScript adalah dengan menggunakan kata kunci **function** :
![Regular Function](/assets/images/dev_regfunc.png)

Code :

```js
function iniPerkalian(a, b) {
  return a * b;
}
console.log(iniPerkalian(5, 6));
// Maka hasil dari perkalian 5 dan 6 adalah 30
```

Untuk mengembalikan nilai dari Regular Function ialah kamu harus menggunakan return. Jika tidak, maka nilai fungsinya akan kembali menjadi undefined.

### Arrow Function

**Arrow Function** fitur yang diperkenalkan dalam ES6 Javascript. Fungsi ini memberikan cara yang lebih ringkas dan jelas untuk mendefinisikan sebuah function dalam Javascript. Mari kita coba menggunakan contoh regular function diatas dan kita ubah dalam bentuk **Arrow Function**
![Arrow Function](/assets/images/dev_arrowfunc.png)

Code :
```js
const iniPerkalian = (a, b) => a * b;
console.log(iniPerkalian(5, 6));
// Maka hasil dari perkalian 5 dan 6 adalah 30
```

Nah... kelihatan jelas sekali bukan perbedaan antara Regular Function dan Arrow Function ? yuk, kita jabarkan satu per satu :

- _**const**_ : Adalah tipe data untuk mendeklarasikan variabel yang nilainya tidak dapat diubah / constant setelah diinisialisasi.
- _**iniPerkalian**_: Nama variabel yang menampung fungsi.
- _**(a, b) => a \* b**_: Ini adalah sintaks arrow function. Parameter function (a dan b) dinyatakan di antara kurung, diikuti oleh operator panah `=>`, dan diikuti oleh ekspresi atau pernyataan yang akan dijalankan oleh fungsi. Dalam hal ini, fungsi mengembalikan hasil perkalian dari `a` dan `b`.

Dengan menggunakan arrow function, kita dapat mendefinisikan fungsi yang lebih singkat. Arrow Function paling efektif digunakan dalam situasi di mana fungsi pendek diperlukan dan penggunaan kata kunci this harus sesuai dengan konteks eksternal. Selain itu, fungsi panah juga sangat berguna dalam callback dan operasi array seperti .map(), .filter(), dan .reduce().

## Mencoba compile menggunakan Dev Tools

![Regular Function](/assets/images/gif/test.gif "Regular Function")
_Menggunakan Regular Function pada Dev Tools_

- **Google Chrome :**<br>
  **Windows/Linux :** Ctrl + Shift + I atau F12<br>
  **Mac :** Cmd + Opt + I

  **Mouse Click :**<br>
  Klik kanan di halaman web dan pilih "Inspect" atau "Inspect Element" dari menu konteks.

- **Mozilla Firefox :**<br>
  **Windows/Linux :** Ctrl + Shift + I atau F12<br>
  **Mac :** Cmd + Opt + I

  **Mouse Click :**<br>
  Klik kanan di halaman web dan pilih "Inspect Element" dari menu konteks.

## Jadi Mana Yang Harus Kamu Gunakan ?

Tidak ada jawaban spesifik akan hal ini. Dalam penggunakan Regular Function maupun Arrow Function itu tergantung pada kasus / projek yang kamu buat. Namun, ada beberapa kasus yang harus dilakukan untuk menggunakannya.

Disarankan untuk menggunakan Regular Function dalam salah satu kasus berikut:

- ketika kamu perlu menggunakan konstruktor dengan kata kunci **new**.
- ketika kamu memerlukan **this** pengikatan untuk dicakup secara dinamis.
- ketika kamu ingin menggunakan **arguments** objek tersebut.

Dan kamu dapat menggunakan fungsi panah dalam salah satu kasus berikut:

- ketika kamu menginginkan sintaks yang lebih ringkas untuk fungsi tersebut.
- Cocok untuk fungsi sederhana tanpa kebutuhan **this** yang berubah-ubah.

Sekian pembahasan kali ini, aku H1zoe pamit undur diri. Sampai jumpa di next tips and tricks. Terima kasih telah membaca dan selamat coding!

<h3 align="center">Keep Consistent and Keep Learning</h3>
<p align="center">Cyaa~~ Babayy~~</p>
