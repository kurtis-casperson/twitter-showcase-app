import express from 'express';
import { Express, Request, Response} from 'express';
const app: Express = express();
const PORT: number = 4321

app.get('/',( req: Request,res: Response) => {
    
    res.send('typescript file working')
    
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});