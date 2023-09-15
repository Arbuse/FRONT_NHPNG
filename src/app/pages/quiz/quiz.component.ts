import {Component, OnInit} from '@angular/core';
import {User} from "../login/user-service/model/user";
import {UserService} from "../login/user-service/user.service";
import {Question} from "../user-profile/model/question";
import {MessageService} from "primeng/api";
import {UserProfileService} from "../user-profile/service/user-profile.service";
import {Router} from "@angular/router";
import {LearningModeApi} from "./models/learning-mode-api";
import {LearningModeEnum} from "./models/learning-mode-enum";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [MessageService]
})
export class QuizComponent implements OnInit {

  learningModeStats: LearningModeApi = {
    poprawneOdpowiedzi_HP: 0,
    poprawneOdpowiedzi_HS: 0,
    poprawneOdpowiedzi_NC: 0,
    poprawneOdpowiedzi_PA: 0,
    poprawneOdpowiedzi_SC: 0,
    poprawneOdpowiedzi_SE: 0,
    niepoprawneOdpowiedzi_HP: 0,
    niepoprawneOdpowiedzi_HS: 0,
    niepoprawneOdpowiedzi_NC: 0,
    niepoprawneOdpowiedzi_PA: 0,
    niepoprawneOdpowiedzi_SC: 0,
    niepoprawneOdpowiedzi_SE: 0,
  };
  constructor(private userService: UserService,
              private messageService: MessageService,
              private userProfileService: UserProfileService,
              private router: Router) {
  }

  username!: string;
  userId!: number;
  public questions: Question[] = [];


  currentQuestionIndex = 0;
  selectedAnswer!: string;
  showResult!: boolean;
  resultMessage = '';
  typ!: string;
  points: number = 0;
  isQuizComplete: boolean = false;
  questionsCounter: number = 0;

  modalTitle!: string;


  ngOnInit() {
    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);
    this.typ = localStorage.getItem('typ') ?? '';

    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.username = user.username;
        this.modalTitle = `Time to learn something, ${this.username}`;
      },
      (error: any) => {
        this.showQuizFailed()
      }
    );

    this.choseQuestionsFromMode();
    this.questionsCounter = this.questions.length - 1;
  }

  private getQuestionsByTyp(typ: string) {
    this.userProfileService.getQuestionsByTyp(typ).subscribe((response: Question[]) => {
      this.questions = response;
    });
  }

  private getQuestionsInLearningMode() {
    this.userProfileService.getQuestionsInLearningMode(this.userId).subscribe((response: Question[]) => {
      this.questions = response;
    });
    this.resetLearningModePoints();
  }

  private choseQuestionsFromMode() {
    switch (this.typ) {
      case 'HP':
        this.getQuestionsByTyp('HP');
        break;
      case 'HS':
        this.getQuestionsByTyp('HS');
        break;
      case 'PA':
        this.getQuestionsByTyp('PA');
        break;
      case 'SE':
        this.getQuestionsByTyp('SE');
        break;
      case 'SC':
        this.getQuestionsByTyp('SC');
        break;
      case 'NC':
        this.getQuestionsByTyp('NC');
        break;
      case 'LM':
        this.getQuestionsInLearningMode();
        break;
      default:
        this.showQuizFailed()
        break;
    }
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    console.log(this.selectedAnswer);
  }

  checkAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.selectedAnswer == currentQuestion.poprawna_odpowiedz) {
      this.updatePoints();
      console.log(this.points);
      if (this.typ == 'LM') {
        this.addPositivePointsToLearningMode();
        console.log("dodalem wartosc dodoatnia do learningMode")
      }
    }
    if (this.typ == 'LM') {
      this.addNegativePointsToLearningMode();
      console.log("dodalem wartosc ujemna do learningMode")
    }
    this.showResult = true;
  }

  updatePoints() {
    this.points++;
  }

  private resetLearningModePoints(): void {
    this.learningModeStats = {
      poprawneOdpowiedzi_HP: 0,
      poprawneOdpowiedzi_HS: 0,
      poprawneOdpowiedzi_NC: 0,
      poprawneOdpowiedzi_PA: 0,
      poprawneOdpowiedzi_SC: 0,
      poprawneOdpowiedzi_SE: 0,
      niepoprawneOdpowiedzi_HP: 0,
      niepoprawneOdpowiedzi_HS: 0,
      niepoprawneOdpowiedzi_NC: 0,
      niepoprawneOdpowiedzi_PA: 0,
      niepoprawneOdpowiedzi_SC: 0,
      niepoprawneOdpowiedzi_SE: 0,
    };
  }
  restartQuiz() {
    this.choseQuestionsFromMode();
    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.showResult = false;
    this.resultMessage = '';
    this.points = 0;
    this.isQuizComplete = false;
  }

  backToUserProfile() {
    this.router.navigate(['/user-profile']);
  }

  private addGames() {
    this.userService.addGames(this.userId).subscribe(
      (respoonse: any) => {
        console.log("dodalem gre");
      },
      (error: any) => {
        this.showPointsFailed();
      }
    );
  }

  private addPointsInLearningMode() {
    this.userService.addPointsInLearningMode(this.userId,this.learningModeStats).subscribe(
      (respoonse: any) => {
        console.log("dodalem parametry");
      },
      (error: any) => {
        this.showPointsFailed();
      }
    );
  }

  private addPointsToNoLearningMode() {
    this.userService.addPoints(this.userId, this.points).subscribe(
      (response: any) => {
        console.log("Dodano punkty");
      },
      (error: any) => {
        this.showPointsFailed();
      }
    );
  }
  private addNegativePointsToLearningMode() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
      switch (currentQuestion.typ) {
        case LearningModeEnum.HP:
          this.learningModeStats.niepoprawneOdpowiedzi_HP++;
          break;
        case LearningModeEnum.HS:
          this.learningModeStats.niepoprawneOdpowiedzi_HS++;
          break;
        case LearningModeEnum.NC:
          this.learningModeStats.niepoprawneOdpowiedzi_NC++;
          break;
        case LearningModeEnum.PA:
          this.learningModeStats.niepoprawneOdpowiedzi_PA++;
          break;
        case LearningModeEnum.SC:
          this.learningModeStats.niepoprawneOdpowiedzi_SC++;
          break;
        case LearningModeEnum.SE:
          this.learningModeStats.niepoprawneOdpowiedzi_SE++;
          break;

    }
  }
  private addPositivePointsToLearningMode() {
    const currentQuestion = this.questions[this.currentQuestionIndex];

    if (this.selectedAnswer == currentQuestion.poprawna_odpowiedz) {
      switch (currentQuestion.typ) {
        case LearningModeEnum.HP:
          this.learningModeStats.poprawneOdpowiedzi_HP++;
          break;
        case LearningModeEnum.HS:
          this.learningModeStats.poprawneOdpowiedzi_HS++;
          break;
        case LearningModeEnum.NC:
          this.learningModeStats.poprawneOdpowiedzi_NC++;
          break;
        case LearningModeEnum.PA:
          this.learningModeStats.poprawneOdpowiedzi_PA++;
          break;
        case LearningModeEnum.SC:
          this.learningModeStats.poprawneOdpowiedzi_SC++;
          break;
        case LearningModeEnum.SE:
          this.learningModeStats.poprawneOdpowiedzi_SE++;
          break;
      }
    }
  }

  nextQuestion() {
    this.checkAnswer();
    this.showResult = false;
    this.selectedAnswer = '';

    if (this.currentQuestionIndex >= this.questions.length - 1) {

      this.isQuizComplete = true;
      this.addGames();
      console.log("dodalem gre");

      if (this.points > 0 && this.typ != 'LM') {
        this.addPointsToNoLearningMode();
      }

      if (this.typ == 'LM') {
        this.addPointsInLearningMode();
        console.log("zakonczylem LM")
        console.log(this.learningModeStats);
      }

    } else {
      this.currentQuestionIndex++;
    }
  }

  private showQuizFailed() {
    this.messageService.clear();
    this.messageService.add({
      key: 'toastFailed',
      severity: 'warn',
      summary: 'Warning',
      detail: 'Quiz has encountered problems reconnecting'
    });
  }

  private showPointsFailed() {
    this.messageService.clear();
    this.messageService.add({
      key: 'toastFailed',
      severity: 'warn',
      summary: 'Warning',
      detail: 'The program encountered an error while trying to add points, please try again later'
    });
  }

}
