import { Component, OnInit } from "@angular/core";
import { JarwisService } from "../../Services/jarwis.service";

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

  constructor(private Jarwis: JarwisService) {}

  ngOnInit() {}

  onSubmit() {
    //console.log(this.form);
    this.Jarwis.login(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
