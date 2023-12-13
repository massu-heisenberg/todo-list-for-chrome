
// Save Tasks
export const setTasksListLocalstory  = (tasks) => {
  chrome.storage.sync.set({'tasks': tasks}, function() {
    console.log('😄 Create Tasks Success～');
  })
}

// Get Tasks
export const getTasksListLocalstory  = (self) => {
  chrome.storage.sync.get('tasks', (result) => {
    self.tasks = result?.tasks || [];
    console.log('👌 Get Tasks Success～')
  });
}

// Update Tasks 
export const updateTasksListLocalstory  = (tasks) => {
  chrome.storage.sync.set({'tasks': tasks}, ()=> {
    console.log('🚀 Update Tasks Success～');
  })
}

// Clear Tasks
export const clearTasksLocalstory  = () => {
  chrome.storage.sync.remove('tasks',()=>{
    console.log('🧹 Clear Tasks Success～');
  })
}

// Save Title
export const saveTitleLocalstory  = (title) => {
  chrome.storage.sync.set({'title': title}, function() {
    console.log('😄 Create Title Success～');
  })
}

// Get Title
export const getTitleLocalstory  = (self) => {
  chrome.storage.sync.get('title', (result) => {
    if(!result?.title){
      self.isTitleEdit = true;
    }
    self.title = result?.title || '';
    console.log('👌 Get Title Success～')
  });
}

// SetBadgeText
export const setBadgeText = (text='0', color='#4ea30a') => {
  chrome.action.setBadgeText({text: text});
  chrome.action.setBadgeBackgroundColor({color: color});
}