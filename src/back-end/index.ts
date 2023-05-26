import express from 'express';
import { Express, Request, Response} from 'express';
const app: Express = express();
const PORT: number = 4321

app.get('https://api.twitter.com/2/tweets/search/recent/?query=hello',( req: Request,res: Response) => {
    res.json()
    res.send('typescript file working')
    
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});