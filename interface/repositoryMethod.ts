


export abstract class RepositoryAbstract {
    abstract save(data: any): Promise<any>;
    abstract update(query:any,updateDoc:any): Promise<any>;
    abstract delete (data: any): Promise<any>;
    abstract findAll(data: any): Promise<any>;
    abstract find(data: any): Promise<any>;
    abstract findById(id: string): Promise<any>;
    abstract updateById(id: string, updateDoc: any): Promise<any>;
    abstract deleteById (data: any): Promise<any>;

}