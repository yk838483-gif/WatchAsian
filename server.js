// ... keep imports and setup code ...

server.use("/", otherRouter)
server.use("/shows", showsRouter);

// --- DELETE THE server.listen(...) PART ---
// --- PASTE THIS INSTEAD: ---

export default function handler(req, res) {
    return server(req, res);
}
