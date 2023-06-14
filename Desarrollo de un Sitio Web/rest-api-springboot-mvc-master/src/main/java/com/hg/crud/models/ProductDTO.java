package com.hg.crud.models;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class ProductDTO {
	
	@Id
	private String _id;
	
	private String name;
	
	private Double price;
	
	private LocalDate expiry_date;

	/**
	 * Obtiene el ID del producto.
	 *
	 * @return El ID del producto.
	 */
	public String get_id() {
		return _id;
	}
	/**
	 * Establece el ID del producto.
	 *
	 * @param _id El ID del producto a establecer.
	 */
	public void set_id(String _id) {
		this._id = _id;
	}

	/**
	 * Obtiene el nombre del producto.
	 *
	 * @return El nombre del producto.
	 */
	public String getName() {
		return name;
	}

	/**
	 * Establece el nombre del producto.
	 *
	 * @param name El nombre del producto a establecer.
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Obtiene el precio del producto.
	 *
	 * @return El precio del producto.
	 */
	public Double getPrice() {
		return price;
	}

	/**
	 * Establece el precio del producto.
	 *
	 * @param price El precio del producto a establecer.
	 */
	public void setPrice(Double price) {
		this.price = price;
	}

	/**
	 * Obtiene la fecha de vencimiento del producto.
	 *
	 * @return La fecha de vencimiento del producto.
	 */
	public LocalDate getExpiry_date() {
		return expiry_date;
	}
	/**
	 * Establece la fecha de vencimiento del producto.
	 *
	 * @param expiry_date La fecha de vencimiento del producto a establecer.
	 */
	public void setExpiry_date(LocalDate expiry_date) {
		this.expiry_date = expiry_date;
	}

	
}
