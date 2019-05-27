package com.splitit.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import javax.persistence.Entity;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;

import com.splitit.Models.Product;
import com.splitit.Models.ProductData;
import com.splitit.Models.User;
import com.splitit.Repository.ProductRepository;


@RestController
@ResponseBody
@RequestMapping(path = "/products") // This means URL's start with /demo (after Application path)
public class ProductController<ImModel> {
	@Autowired// This means to get the bean called userRepository
				// Which is auto-generated by Spring, we will use it to handle the data
	
	private ProductRepository productRepository;

	 public ProductController(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	 @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path = "/add") // Map ONLY GET Requests
	public HttpStatus addProduct( @RequestBody ProductData data) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means 1111111111111111111111111it is a parameter from the GET
		// or POST request

		Product p = new Product();
		p.setName(data.getName());
		p.setType(data.getType());
		p.setPrice(data.getPrice());
		p.setDiscountPrice(data.getDiscountPrice());
		//return productRepository.save(p);
		return  HttpStatus.CREATED;
	
		
	}

	@GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
	public Optional<Product> findById(@PathVariable final long id) {
        return productRepository.findById(id);
    	}

  @PutMapping(value="/price/{id}")
  @CrossOrigin(origins = "http://localhost:3000")
  public ResponseEntity<Product> changePrice(@PathVariable("id") long id,
                                        @RequestBody Product product){
    return productRepository.findById(id)
        .map(record -> {
            record.setPrice(product.getPrice());
            Product updated = productRepository.saveAndFlush(record);
			
			return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
  }


  @CrossOrigin(origins = "http://localhost:3000")
  @PutMapping(value="/discount/{id}")
  public ResponseEntity<Product> changeDiscountPrice(@PathVariable("id") long id,
                                        @RequestBody Product product){
    return productRepository.findById(id)
        .map(record -> {
            record.setDiscountPrice(product.getDiscountPrice());
            Product updated = productRepository.saveAndFlush(record);
			
			return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
  }


    @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping("/delete/{id}")
public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long id, @RequestBody Product product ){
		Product deletingProduct = productRepository.findById(id).get(); 
	if(deletingProduct != null){
	productRepository.delete(deletingProduct);
	return  ResponseEntity.ok().build();
	}else
         return  ResponseEntity.notFound().build();
}
}



