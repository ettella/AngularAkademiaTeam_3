import { Component, Input, OnInit } from '@angular/core';

export class Data {
  title?: string;
  description?: string;

  constructor(){
      this.title = '',
      this.description = ''
  }
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  // @Input() id!: number;

  accordion: Data[];

  constructor() {
    this.accordion = [{
      title: 'Angular Bootcamp',
      description: ' Angular ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      title: 'Figma',
      description: 'Figma ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      title: 'Typescript',
      description: 'Typsecript ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      title: 'Javascript',
      description: 'Javascript ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem quae suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    },
    {
      title: 'Angular Libraries',
      description: 'Angular Libraries ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, officia reprehenderit dolore architecto rerum libero, voluptatem ipsa exercitationem qua suscipit adipisci minus? Eum eveniet error, consequuntur asperiores impedit laudantium atque!'
    }]

   }

  ngOnInit(): void {
  }


  onCollapseAccordion(event: any ){
    if (event.style.display === "flex") {
      event.style.display = "none";
  } else {
        event.style.display = "flex";
   }  
}




}
