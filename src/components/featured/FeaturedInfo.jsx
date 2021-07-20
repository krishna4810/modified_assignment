import'./featuredinfo.css'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {connect} from 'react-redux'

function FeaturedInfo(props){
    const {incomes,auth}=props;
    var Income_sum=0
    var Expense_sum=0
    var Income_count=0
    var Expense_count=0
    var UID=auth.uid;

    {incomes && incomes.map(income=>{
        
        if(income.user_id===UID && income.IN_EX ==="IN"){
            Income_count=Income_count+1;
            Income_sum=Income_sum+parseInt(income.income_money);
        }
        else if(income.user_id==UID && income.IN_EX=="EX"){
            Expense_count=Expense_count+1;
            Expense_sum=Expense_sum+parseInt(income.income_money);
        }
    })}
    return (
        <div className="featured">
            <div className="featuredItemBlue">
                <span className="featuredTitleBlue">Income</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Nu.{Income_sum} 
                    </span>
                </div>

            </div> 
            <div className="featuredItemRed">
                <span className="featuredTitleRed">Expenditure</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Nu. {Expense_sum}
                    </span>
                </div>

            </div> 
            <div className="featuredItemGreen">
                <span className="featuredTitleGreen">Balance</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Nu. {Income_sum - Expense_sum}
                    </span>
                </div>

            </div> 
            <div className="featuredItemYellow">
                <span className="featuredTitleYellow">Total Transactions</span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">{Income_count + Expense_count}
                </span>
                </div>

            </div>  
        </div>
    )
}
const mapStateToProps=(state)=>{

    return{
        incomes:state.firestore.ordered.incomes,
        auth:state.firebase.auth
    }

}
export default compose(
    firestoreConnect(()=>[
        
        { collection:'incomes'},
    ]),
    connect(mapStateToProps),
)(FeaturedInfo)
