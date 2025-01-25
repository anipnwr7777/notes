# Hello World

## HTTP (Hypertext Transfer Protocol)
- **Stateless**: HTTP does not retain user information between requests.  
  - To maintain sessions, data is stored on the client-side using **cookies** to avoid re-authentication repeatedly.  
  - Cookies help maintain session information.  

- **HTTP Headers**: Metadata associated with requests and responses.  

### Request-Response Model
1. **Request**: Client sends a request to the server.
   - Example: Method (e.g., GET, POST) and URL.
2. **Response**: Server sends an HTTP response that the client understands.

### HTTP Methods:
- **GET**: Request to fetch data.
- **POST**: Request to send data.
- **PUT**: Request to update data.
- **DELETE**: Request to delete data.
- **PATCH**: Request to partially update data.

### HTTP/2
- **Multiplexing**: Enables multiple files to be sent together in response to a single request.  
  - For example, if a file references other resources (like images or CSS), the server automatically sends them.
- **Compression**: Reduces data size for faster transfer.
- **Encryption**: Built-in security features.
- **Fallback**: HTTP/1 acts as a fallback for HTTP/2.

---

## Supporting Protocols
1. **FTP (File Transfer Protocol)**: Protocol for transferring files.
2. **TCP (Transmission Control Protocol)**: Ensures packets are sent to the correct destination.
3. **IP (Internet Protocol)**: Assigns unique addresses to devices on the internet.
4. **DNS (Domain Name System)**: Resolves domain names to IP addresses.

---

## Key Terms
- **Payload**: Actual data sent in the request or response.

---

## HTTP Request Lifecycle
1. **Setup connection**: Establish a connection using TCP.
2. **Exchange TLS certificate**: Secure communication with encryption.
3. **Make a request**: Specify method, URL, and data.
4. **Receive a response**: Get server's response.
5. **Close connection**: End communication.

---

### Security Note
- Websites cannot access cookies from other domains (e.g., Facebook cannot read Amazon's cookies).  
  - This is a browser-implemented security feature.


### Notes
- Ha hello, awaz aa rahi hai. ha aa rahi hai. -> this is TCP
- hindi me baat kare, ha chalo -> this is http

