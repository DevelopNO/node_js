// request is depracated.  using got
import req from 'request';

req('https://google.com', (err, res, body) => {
    if (err) throw err;

    console.log(body);
});