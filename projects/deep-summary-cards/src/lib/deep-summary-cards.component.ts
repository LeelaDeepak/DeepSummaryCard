import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-deep-summary-cards',
  template: `
    <div
      class="card"
      style="--clr: {{ cardMainColor }};--bgclr:{{ cardBgColor }};--txtclr:{{
        cardTextColor
      }};"
    >
      <div class="imgBox">
        <img src="{{ cardImg }}" alt="CardImg" />
      </div>
      <div class="content">
        <h2>
          <b>{{ cardTitle }}</b>
        </h2>
        <p>
          {{ cardContent }}
        </p>
        <a (click)="gotopath(cardBtnPath)"
          ><b>{{ cardButtonText }}</b></a
        >
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      .card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        cursor: pointer;
        width: 350px;
        height: 300px;
        background-color: var(--bgclr);
        border-radius: 20px;
        margin: 20px;
        box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);

        .imgBox {
          position: absolute;
          width: 300px;
          top: 20px;
          height: 220px;
          border-radius: 12px;
          transition: 0.5s;
          background: #333;
          overflow: hidden;

          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .content {
          position: absolute;
          top: 252px;
          height: 35px;
          text-align: center;
          overflow: hidden;
          width: 100%;
          padding: 0 30px;
          transition: 0.5s;

          h2 {
            font-size: 1.5em;
            font-weight: 700;
            color: var(--clr);
          }

          p {
            color: var(--txtclr);
            font-size: 0.9em;
          }

          a {
            position: relative;
            top: 15px;
            display: inline-block;
            padding: 12px 25px;
            margin: 5px;
            background: var(--clr);
            color: var(--bgclr);
            font-weight: 500;
            text-decoration: none;
            border-radius: 8px;
          }
        }
      }

      .card:hover {
        height: 400px;

        .imgBox {
          top: -100px;
          scale: 0.75;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
        }

        .content {
          height: fit-content;
          width: 100%;
          top: 130px;
          padding: 10px 30px;
        }

        a:hover {
          color: var(--clr);
          border: 3px solid var(--clr);
          background-color: var(--bgclr);
          font-weight: bold;
        }
      }
    `,
  ],
})
export class DeepSummaryCardsComponent {
  @Input({ required: true }) cardTitle!: string;
  @Input({ required: true }) cardContent!: string;
  @Input({ required: true }) cardImg!: string;
  @Input({ required: true }) cardButtonText!: string;
  @Input({ required: true }) cardMainColor!: string;
  @Input({ required: true }) cardBgColor!: string;
  @Input({ required: true }) cardTextColor!: string;
  @Input({ required: true }) cardBtnPath!: string;

  constructor(private route: Router) {}

  ngOnInit() {
    if (
      this.cardTitle == '' ||
      this.cardContent == '' ||
      this.cardButtonText == '' ||
      this.cardMainColor == '' ||
      this.cardImg == '' ||
      this.cardTextColor == '' ||
      this.cardBgColor == '' ||
      this.cardBtnPath == ''
    ) {
      this.cardImg = '/assets/uploadimg.jpg';
      this.cardBgColor = 'black';
      this.cardTextColor = 'white';
      this.cardTitle = 'Card Title';
      this.cardMainColor = 'white';
      this.cardButtonText = 'Button Text';
      this.cardContent = 'Add The Card Description over here . . .';
      this.cardBtnPath = '/';
    } else {
      this.cardBgColor = this.cardBgColor;
      this.cardButtonText = this.cardButtonText;
      this.cardImg = this.cardImg;
      this.cardMainColor = this.cardMainColor;
      this.cardTitle = this.cardTitle;
      console.log(this.cardTitle.length);
      if (this.cardTitle.length > 27) {
        console.log('Title Limit Exceeded');
        this.cardTitle = this.cardTitle.slice(0, 27);
      } else {
        this.cardTitle = this.cardTitle;
        console.log('Title Working Fine!!');
      }
      this.cardTextColor = this.cardTextColor;
      console.log(this.cardContent.length);
      if (this.cardContent.length > 189) {
        console.log('Content Limit Exceeded');
        this.cardContent = this.cardContent.slice(0, 189) + ' . . . ';
      } else {
        this.cardContent = this.cardContent;
        console.log('Content Working Fine!!');
      }
    }
  }

  gotopath(cardpath: string) {
    console.log('Go To View Content');
    console.log(`Path To ${cardpath}`);
    this.route.navigateByUrl(cardpath);
  }
}
