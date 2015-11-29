var React = require('react');



var BkDay = React.createClass({
  render: function() {
    return <div className="day">
      
    </div>
  }
});


var BkMonth = React.createClass({
  componentDidMount: function(){
    
  },
  render: function() {
  var grids = [];
    for (var i = 0; i < 42; i++) {
      if (i >= this.props.monthState.curDay && i < (this.props.monthState.curDaysinMonth + this.props.monthState.curDay)) {
        grids.push(<div className="grid this-month" key={i} ><BkDay /></div>);
      } else {
        grids.push(<div className="grid" key={i} ><BkDay /></div>);
      }
  }
  return  <div>
  <div className="grid-title">SUN</div>
  <div className="grid-title">MON</div>
  <div className="grid-title">TUE</div>
  <div className="grid-title">WED</div>
  <div className="grid-title">THU</div>
  <div className="grid-title">FRI</div>
  <div className="grid-title">SAT</div>
  <div>
    {grids}
  </div>
  </div>
  }
});

var Header = React.createClass({
  render: function() {
    return <nav className="nav">
    <span>{this.props.monthState.curYear}</span>   
    <span>{this.props.monthState.curMonth}</span>   
    <span>{this.props.monthState.curDate}</span>   
     <button type="button">DELETE</button> 
     <button type="button">ADD</button>
     <button type="button">DETAIL</button>
    </nav>
  }
});

var App = React.createClass({
  componentWillMount:function(){

  },
  getInitialState: function(){
    return {
        curProps: this.props,
        id: 3
    }
  },
  render: function() {
    return <div className="app">
             <Header monthState={this.state.curProps} />
             <BkMonth monthState={this.state.curProps} />
             <button onClick={this.prevMonth}>PREV MONTH</button>
             <button onClick={this.nextMonth}>NEXT MONTH</button>
          </div>
  },
  nextMonth: function(){
        //console.log(this.state.curProps);
        console.log(this.state.id);
        var BkMonthAllDate = this.state.curProps.curAllDate;
        var BkMonthYear = BkMonthAllDate.getFullYear();
        var BkMonthMonth = BkMonthAllDate.getMonth() + 3;
        var BkMonthDate = BkMonthAllDate.getDate();
        var BkMonthDay = BkMonthAllDate.getDay();

        var BkMonthDaysinMonth = new Date(BkMonthAllDate.getFullYear(), BkMonthAllDate.getMonth()+1, 0);

        var BkMonthDaysinMonth = new Date(BkMonthAllDate.getFullYear(), BkMonthAllDate.getMonth()+1, 0).getDate();


var newId = this.state.id + 1;

        var BkMonthOptions = {
              curAllDate: BkMonthAllDate,
              curYear: BkMonthYear,
              curMonth :BkMonthMonth,
              curDate: BkMonthDate,
              curDay: BkMonthDay,
              curDaysinMonth:  BkMonthDaysinMonth
        };
        // console.log(BkMonthOptions);
        this.setState({
            curProps: BkMonthOptions,
            id: newId
        });

       // console.log(this.state.curProps.curAllDate);
        console.log(this.state.id);

  },
  prevMonth:function(){

  }
});

var OriDate = new Date(),
    year = OriDate.getFullYear(),
    month = OriDate.getMonth() + 1,
    date = OriDate.getDate(),
    day = OriDate.getDay(),
    curAllDate =  new Date(year, month, date),
    curDaysinMonth = new Date(curAllDate.getFullYear(), curAllDate.getMonth()+1, 0).getDate();

var options = {
        curAllDate: curAllDate,
        curYear: year,
        curMonth :month,
        curDate: date,
        curDay: day,
        curDaysinMonth:  curDaysinMonth
}
var element = React.createElement(App, options);
React.render(element, document.querySelector('.container'));

