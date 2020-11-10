export class ContactoModel{
    constructor(
        /// <summary>
       /// Identificador unico del usuario 
       /// </summary>
       public  ContactoId:number,
       /// <summary>
       ///  NOMBRE DEL CONTACTO	
       /// </summary>
       public  Nombre:string,
       /// <summary>
       /// APELLIDOS DEL CONTACTO
       /// </summary>
       public  Apellidos:string,
       /// <summary>
       /// NUMERO TELEFONICO 
       /// </summary>
       public  Telefono:string,
       /// <summary>
       /// CORREO ELECTRONICO 
       /// </summary>
       public  Email:string,
       /// <summary>
       /// DIRECCION DEL CONTACTO
       /// </summary>
       public  Direccion:string,
       /// <summary>
       /// TIPO DE TELEFONO 	
       /// </summary>
       public  CategoriaTel:string
    ){}
}