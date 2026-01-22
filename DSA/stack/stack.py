class Stack():
    def __init__(self):
        self.items=[]

    def push(self,item):
        self.items.append(item)

    def pop(self):
        if len(self.items)!=0:
            return self.items.pop()
        print("Stack is empty!")
    
    def isEmpty(self):
        return self.items==[]
    
    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
    
    def currStack(self):
        return self.items

stack=Stack()
stack.push('A')
stack.push('B')
print(stack.currStack())
print(stack.pop())
stack.push('C')
print(stack.currStack())
print(stack.isEmpty())
print(stack.peek())