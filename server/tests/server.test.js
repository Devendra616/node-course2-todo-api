const expect = require('expect');
const request =  require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');



describe('POST /todos',()=>{ 
    it('should create a new todo',(done) => {
        var text= 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);
            })
            .end((err,res)=>{
                if(err){
                    return done(err);
                }

                Todo.find().then((data)=>{
                    expect(data.length).toBe(1);
                    expect(data[0].text).toBe(text);
                    done();
                }).catch((er)=> done(er));
            });
    });

    it('should not create todo with invalid data',(done)=>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err){
                return done(err);
            }

            Todo.find().then((data) => {
                expect(data.length).toBe(0);
                done();
            }).catch((e)=> done(e));
        });
    })
});