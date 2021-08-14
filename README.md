------------------------ Semua soal test beserta source code yang saya kerjakan ada di branch master --------------------

===========================================================================
- Soal No 1 ada di file sqlqueryno1.txt
- Soal no 2 sudah saya kerjakan dan bisa diakses di https://preliminarytestno2.herokuapp.com/ dengan endpoint "preliminarytestno2/api/v1/detail?apikey=[param]&i=[param]" dan "preliminarytestno2/api/v1/search?apikey=[param]&s=[param]&page=[param]"
- unit test untuk soal no 2 ada di file UNIT_TEST.docx
- Soal no 3 ada di file soalno3.txt dan bisa diakses di https://preliminarytestno2.herokuapp.com/preliminarytestno2/api/v1/anagram dengan payload {"listWords":[]}
- Soal no 4 ada di file soalno4.txt dan bisa diakses di https://preliminarytestno2.herokuapp.com/preliminarytestno2/api/v1/bracketfind?word=[param]

===========================================================================

=========== Explanation =====================================================

- Soal no 1
yang saya lakukan di soal nomor 1 adalah dengan join ke table itu sendiri menggunakan id dan parent, saya menggunakan left join agar hasil join yang bernilai null tetap dapat tampil.

- Soal no 2
saya melakukan request ke http://www.omdbapi.com/ dengan memanfaatkan endpoint yang sama namun dengan parameter yang berbeda, keduanya sama-sama menggunakan parameter "apikey" namun perbedaannya yaitu pada endpoint search, saya menggunakan parameter "s" dan "page" sedangkan pada endpoint detail saya cukup menggunakan parameter "i". saya sudah menyiapkan 1 method untuk insert log setiap ada request ke setiap endpoint dengan mySQL, namun yang saya aktifkan adalah method untuk insert ke db PostgreSQL karena mohon maaf layanan mySQl tidak bisa digunakan secara bebas di jasa hosting yang saya pakai.

- Soal no 3
menurut saya ada cara lebih sederhana, yaitu menemukan dulu posisi tanda kurung buka "(" dan kurung tutup ")" dan mengambil string diantara keduanya dengan method "substr()" dengan mengacu pada posisi kurung tersebut.

- Soal no 4
hal pertama yang saya lakukan adalah mengurutkan kata secara alphabetical dan ascending sembari mengecek apakah array yang memiliki index = sortedword memiliki nilai null. Bila null maka akan dibuat array ber-index = sortedword dan akan dimasukkan kata asli sebelum diurutkan, bila selain null maka dimasukkan kata asli ke array ber-index = sortedword yang sudah ada.
