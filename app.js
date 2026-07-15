const TODAY = new Date();
const MS_IN_A_DAY = 1000*60*60*24;
const courseNames=["Web Development","Python & Data Science","AI & Machine Learning","Mobile App Development"];
const courseStatuses = ["Open Now","Coming Soon","Open Soon","Closed"];
const courseLaunchDates = ["2026-07-01","2026-07-14","2026-07-19","2026-07-19"];
function daysLeft(dateString){
    const launchDate = new Date(dateString);
    const difference = launchDate - TODAY;
    return Math.ceil(difference / MS_IN_A_DAY);
}
function daysLabel(days){
    if(days>0) {
        return `${days} days left`;
    } else if(days===0) {
        return "Launching Today";
    }else {
        return `Already Launched ${Math.abs(days)} days ago`;
    }
}
function filterByStatus(status){
    let result = [];
    for(let i = 0; i < courseStatuses.length; i++){
        if(courseStatuses[i] === status){
            result.push(courseNames[i]);
        }
    }
    return result;
}
console.log("=== All Courses ===");
for(let i = 0; i < courseNames.length; i++) {
    const days = daysLeft(courseLaunchDates[i]);
    console.log(
        courseNames[i],
        "-",
        courseStatuses[i],
        "-",
        daysLabel(days)
    );
}
console.log("=== Open Courses ===");
console.log(filterByStatus("Open Now"));
console.log("=== Upcoming Courses ===");
for(let i = 0; i < courseNames.length; i++) {
    const days = daysLeft(courseLaunchDates[i]);
    if(days>0) {
        console.log(courseNames[i] + "-" + days + " days left");
    }
}


