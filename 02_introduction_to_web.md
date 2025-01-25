# Introduction to Web

## OSI Model
- Defines **7 layers** of protocols that enable the functioning of the internet.

---

## TCP and UDP

### TCP (Transmission Control Protocol)
- **Reliable**: Ensures packets are delivered correctly.
- **Ordered**: Maintains the sequence of data.
- **Three-way handshake**:
  1. Client sends `SYN` to the server.
  2. Server responds with `SYN + ACK`.
  3. Client sends `ACK` to the server.

#### How TCP Ensures Reliability:
- Client assigns sequence numbers to data packets.
- If packets are lost, TCP requests retransmission.
- Ensures the server knows when all data is received.

### UDP (User Datagram Protocol)
- **Unreliable**: No guarantee of packet delivery.
- **Fast**: Ideal for small payloads (e.g., DNS resolution).
- Does not ensure ordering or retransmission.

---

## Protocol Interaction
- HTTP handles requests and responses using its defined rules and then passes tasks to underlying protocols (e.g., TCP, UDP).
- At the server, protocols sequentially unpack and process the received data.

---

## Summary 1:
- Protocols work together to ensure data sent from a client is understood by the server.
- They make it possible for computers to communicate, transfer data, and define rules for interpreting data.

## Summary 2:
- TCP and UDP handle data packet transfer over the internet:
  - **TCP**: Reliable, ordered, ensures no data loss.
  - **UDP**: Fast, suitable for scenarios like DNS resolution where speed matters more than reliability.

---

## How the Internet Works
1. **DNS Resolution**:
   - Resolves a domain name into its IP address.
   - Process:
     1. Query the root server for the `.com` domain server.
     2. Ask the `.com` server for the registrar of `a.com`.
     3. Query the registrar to get the IP address of the domain.
     4. Make a `GET` request to the resolved IP.

2. **DNS over UDP**:
   - Speed prioritized over reliability.
   - Small payloads mean retransmission is feasible if a query fails.

---

## HTML Structure
- **Head**: Contains metadata (e.g., title, scripts, styles).
- **Body**: Contains the visible content and elements of the webpage.
