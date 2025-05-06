
Nama Proyek: RAWTix – NFT Ticketing Platform
Teknologi Utama: Internet Computer Protocol (ICP), Motoko, Next.js, React, DFINITY SDK (dfx), NFT, Wallet Internet Identity (II)
Status: Deploy di Mainnet (ICP)

Deskripsi Singkat:
RAWTix adalah platform Web3 untuk pembelian tiket berbasis NFT yang dibangun di atas Internet Computer. Proyek ini memungkinkan pengguna untuk:
- Membuat event sebagai organizer
- Membeli tiket NFT sebagai peserta
- Memverifikasi tiket melalui QR scan
- Terintegrasi penuh dengan dompet Internet Identity (II)

Fitur Utama:
- Event Creation: Organizer dapat membuat dan mengelola event melalui frontend interface.
- NFT Minting: Tiket dicetak sebagai NFT melalui canister ticket dan terdaftar secara permanen di blockchain.
- Scan Verification: Tiket dapat dipindai dan divalidasi untuk keabsahannya.
- Auth Login: Menggunakan Internet Identity dari DFINITY untuk login tanpa password.
- Deklarasi Frontend: Menggunakan Next.js yang dibundel via canister frontend dengan deklarasi candid.

Struktur Canister:
- events → pengelolaan event (Motoko)
- ticket → manajemen tiket NFT (Motoko)
- profile → data pengguna/organizer (Motoko)
- frontend → tampilan web berbasis Next.js
- internet-identity → login dengan dompet II
- test → untuk simulasi/debug internal
