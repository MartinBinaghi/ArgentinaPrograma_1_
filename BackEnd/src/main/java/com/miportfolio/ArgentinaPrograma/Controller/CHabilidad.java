package com.miportfolio.ArgentinaPrograma.Controller;

import com.miportfolio.ArgentinaPrograma.Dto.dtoHabilidad;
import com.miportfolio.ArgentinaPrograma.Entity.Habilidad;
import com.miportfolio.ArgentinaPrograma.Security.Controller.Mensaje;
import com.miportfolio.ArgentinaPrograma.Service.SHabilidad;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/habilidad")
@CrossOrigin(origins = "http://localhost:4200")
public class CHabilidad {
    @Autowired
    SHabilidad sHabilidad;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Habilidad>> list(){
        List<Habilidad> list = sHabilidad.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Habilidad> getById(@PathVariable("id") int id){
        if(!sHabilidad.existsById(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Habilidad habilidad = sHabilidad.getOne(id).get();
        return new ResponseEntity(habilidad, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sHabilidad.existsById(id)) {
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        }
        sHabilidad.delete(id);
        return new ResponseEntity(new Mensaje("producto eliminado"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHabilidad dtohab){      
        if(StringUtils.isBlank(dtohab.getTituloS()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sHabilidad.existsByTituloS(dtohab.getTituloS()))
            return new ResponseEntity(new Mensaje("Esa habilidad existe"), HttpStatus.BAD_REQUEST);
        
        Habilidad habilidad = new Habilidad(dtohab.getPorcentajeS(), dtohab.getTituloS(), dtohab.getImgS());
        sHabilidad.save(habilidad);
        
        return new ResponseEntity(new Mensaje("Habilidad agregada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHabilidad dtohab){
        //Validamos si existe el ID
        if(!sHabilidad.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no existe"), HttpStatus.BAD_REQUEST);
        //Compara nombre de habilidades
        if(sHabilidad.existsByTituloS(dtohab.getTituloS()) && sHabilidad.getByTituloS(dtohab.getTituloS()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Esa habilidad ya existe"), HttpStatus.BAD_REQUEST);
        //No puede estar vacio
        if(StringUtils.isBlank(dtohab.getTituloS()))
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Habilidad habilidad = sHabilidad.getOne(id).get();
        habilidad.setPorcentajeS(dtohab.getPorcentajeS());
        habilidad.setTituloS(dtohab.getTituloS());
        habilidad.setImgS(dtohab.getImgS());
        
        sHabilidad.save(habilidad);
        return new ResponseEntity(new Mensaje("Habilidad actualizada"), HttpStatus.OK);
             
    }
}
