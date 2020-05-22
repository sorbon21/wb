export  class Model {
  private description:string
  private label: string
  private action:any
  public page:number
  constructor(page:number,label:string,description:any,action:any){
    this.page=page
    this.label = label;
    this.description=description;

    this.action=action;
  }
}

