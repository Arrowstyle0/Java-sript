Build a full-stack web application called **Secure File Vault** with a zero-knowledge architecture that allows users to securely store and retrieve encrypted files from any device without relying on local storage.

### Core Concept

Users should be able to:

* Access their vault from any device
* Authenticate securely without sharing phone numbers
* Encrypt and decrypt files entirely on the client side
* Ensure that the server never has access to plaintext data or encryption keys

---

### Authentication System

Implement passwordless authentication using passkeys based on the WebAuthn standard.

* Users can sign up and log in using device-based authentication (biometrics, PIN, etc.)
* Passkeys should work across devices where supported
* Authentication should only verify identity, not handle encryption

---

### Encryption Architecture (Zero-Knowledge)

Design a strong client-side encryption system:

1. When the user sets a password/passphrase:

   * Derive a **Master Key** using PBKDF2 with:

     * High iteration count
     * Unique salt per user

2. For each file:

   * Generate a random **File Encryption Key**
   * Encrypt the file using AES-GCM in the browser
   * Encrypt the File Key using the Master Key (key wrapping)

3. Store on the server:

   * Encrypted file
   * Encrypted file key
   * IVs and salts
   * Metadata (filename, size, timestamps)

4. Ensure:

   * No encryption keys are ever stored in plaintext
   * The server cannot decrypt user files under any circumstance

---

### Recovery Key System (Critical Feature)

Implement a secure recovery mechanism:

* On account creation:

  * Generate a **one-time Recovery Key** (high-entropy random string)
  * Display it to the user and instruct them to store it safely
  * Do NOT store it in plaintext on the server

* Store only a hashed version of the recovery key

* Recovery flow:

  * User provides recovery key if they forget their password
  * Verify it against the stored hash
  * Allow user to reset their password
  * Re-encrypt stored file keys using the new Master Key

* Clearly communicate:

  * If both password and recovery key are lost, data is permanently unrecoverable

---

### Backend Requirements

* Node.js with Express
* MongoDB for storing user data and file metadata
* Secure API with JWT or session-based authentication
* Proper validation and error handling
* Rate limiting for auth endpoints

---

### Frontend Requirements

* Angular application
* Use Web Crypto API for all cryptographic operations
* Clean dashboard UI for:

  * Uploading files
  * Viewing stored files
  * Downloading and decrypting files
  * Deleting files

---

### File Handling

* Upload encrypted files to cloud storage (e.g., Backblaze B2)
* Store only encrypted data remotely
* Implement secure download and decryption flow

---

### Security Considerations

* Never send passwords or keys to the server
* Use HTTPS everywhere
* Protect against brute-force attacks
* Validate all inputs
* Use secure token handling

---

### Optional Enhancements

* File sharing via expiring secure links
* Two-factor authentication
* Upload progress tracking
* File expiration and cleanup jobs

---

### Deliverable

The final system should demonstrate:

* Strong understanding of cryptography fundamentals
* Secure authentication vs encryption separation
* Real-world zero-knowledge system design
* Clean, scalable full-stack architecture
