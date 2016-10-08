import { Observable } from 'rxjs/Observable';

export default (url) => {
  return Observable.create(observer => {
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.send();

    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          observer.next(JSON.parse(this.response));
          observer.complete();
        } else {
          observer.error();
        }
      }
    };
  });
}
