/**
 * Created by Acery on 2017/5/25.
 */
import axios from 'axios';

let test = () => {
	axios.get('http://localhost:3000/testUrl/about', {
		hello: 'hello',
	});
};

export {test};


