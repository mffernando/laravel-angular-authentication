import { Component, OnInit } from "@angular/core";
import { JarwisService } from "../../Services/jarwis.service";
import { TokenService } from "../../Services/token.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(private Jarwis: JarwisService, Token: TokenService) {}

  ngOnInit() {}

  onSubmit() {
    //console.log(this.form);
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
