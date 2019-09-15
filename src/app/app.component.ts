import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graph-api';
  posts = [];
  pageDetails;
  constructor(private http : HttpClient){

  }

  ngOnInit(){
    const token = 'EAALvJXQfjxQBAMDZAuYFoyc3AYqy99TieZBbj7d2Mf3oEBOza7vsoWGLkheTbCTqEZCucHmtm7A0QnZBFRjVsbjY5JIq2lU5tPMUtMXydKkKb3Gx0tYkkBpQIPwYOl8nweP4a8BYtmo1IViFfi9n9xGIkGUjJZBivNIrEjAib7wZDZD';
    let url = 'https://graph.facebook.com/750632711777207?fields=location,name,is_permanently_closed,page_token,posts';
    const tokenString = `&access_token=${token}`;
    url = url + tokenString;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `${token}`);
    return this.http
    .get(url)
    .subscribe((response:any) => {
      this.pageDetails = response;
      this.posts = response.posts.data;
    })

  }

    
}
