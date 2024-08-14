import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{ title: string; text: string }>()
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; ticketText: string }>();

  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, ticketText: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
