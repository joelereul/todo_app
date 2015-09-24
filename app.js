

window.addEventListener("load", function() 
{
  console.log("Hello World!");
});

document.getElementById("showAddTaskEdit").addEventListener("click",showAddTaskEdit);
document.getElementById("hideAddTaskEdit").addEventListener("click",hideAddTaskEdit);
var submitTaskEditButton=document.getElementById('submitAddTaskEdit');
submitTaskEditButton.addEventListener("click",submitAddTaskEdit);
var form=document.getElementById('addTaskEdit');
for (i in form.elements)
{
	if (form.elements[i].addEventListener)
	{
		console.log(form.elements[i]);
		form.elements[i].addEventListener("change",function()
		{	
			if (submitTaskEditButton.style.pointerEvents!='auto')
			{
				console.log("change");
			}
		});
	}
} 

function showAddTaskEdit()
{
 document.getElementById('addTaskEdit').style.display='block'
}


function hideAddTaskEdit()
{
 document.getElementById('addTaskEdit').style.display='none'
}

function submitAddTaskEdit()
{
	var form=document.getElementById('addTaskEdit');
	form.style.display='none';
	taskList.addTask({name:form.taskName,description:form.taskDescription});
}


var taskList=
{
	tasks_:[
			{title:"Manger",description:"s'alimenter"},
			{title:"Dormir",description:"faire dodo"},
			{title:"Travailler",description:"gagner des sous"},
			{title:"Jouer",description:"a la PS3"},
		],

	
	addTaskListeners_:[],

	getTasks:function()
	{
		return this.tasks_;
	},

	addAddTaskListener:function(aListener)
	{
		this.addTaskListeners_.push(aListener);
	},

  addTask:function(aTask)
	{
		this.tasks_.push(aTask);
		for (i in this.addTaskListeners_)
		{
			this.addTaskListeners_[i](this,aTask);
		}
	}

}

var list_container=document.getElementById("taskList");
var tasks= taskList.getTasks()
for (i in tasks)
{
	var paragraph=document.createElement("p");
	paragraph.innerHTML=tasks[i].title;
	var li=document.createElement("li");
	li.appendChild(paragraph);
	list_container.appendChild(li);
}

taskList.addAddTaskListener(function(aTaskList,aTask)
{
	var list_container=document.getElementById("taskList");
	var paragraph=document.createElement("p");
	paragraph.innerHTML=aTask.title;
	var li=document.createElement("li");
	li.appendChild(paragraph);
	list_container.appendChild(li);
});

taskList.addTask({title:"Musique",description:"Tout déchirer"});


