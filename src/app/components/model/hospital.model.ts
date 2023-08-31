import { BdCamp } from "./bdcamp.model";
import { bloodDetails } from "./blood-details.model";

export class Hospital{

    constructor(
        public   hospitalId:string,
        public hospitalName:String,
        public  username:String,
        public  password:String,
        public  address:String,
	    public mobilenum: String,
        public BDcamp: BdCamp[],
        public bloodDetails: bloodDetails[]

    ){




    }


}