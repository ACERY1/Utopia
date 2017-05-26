/**
 * Created by Acery on 2017/5/25.
 */
import axios from 'axios';

let test = () => {
	axios.get('http://localhost:3000/square/1', {
		hello: 'hello',
	});
};

export {test};


