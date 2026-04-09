import app from "./app.js";
import dbCon from "./db/configuration.js";
import envData from "./env.js";
const port = envData.PORT;
app.listen(port, async () => {
    await dbCon();
    console.log(`Server is running on port ${port}`);
});
